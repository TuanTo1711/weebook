"use client";

import { Anchor, NavLink } from "@mantine/core";
import Link from "next/link";
import React, { type FC } from "react";
import slugify from "slugify";
import type { Category } from "~/types";

const HierarchyCategory: FC<{
  categories: Category[];
  lastPartUrl: string;
}> = ({ categories, lastPartUrl }) => {
  const exists = (children?: Category[]): Category | undefined => {
    if (!children || children.length === 0) return undefined;

    for (const category of children) {
      if (
        slugify(category.name, { lower: true, locale: "vi" }) === lastPartUrl
      ) {
        return category;
      }

      if (category.children) {
        const found = exists(category.children);
        return found;
      }
    }
  };

  const renderHierarchy = (category: Category) => {
    const menuItems = category?.children;
    const parentSlug = slugify(category?.name ?? "", {
      lower: true,
      locale: "vi",
    });

    return (
      <NavLink
        component={Link}
        href={`/${parentSlug}`}
        type=""
        opened
        key={category.name}
        label={category.name}
        active={slugify(category.name, { lower: true }) === lastPartUrl}
      >
        {menuItems?.map((child) => {
          if (slugify(child.name, { lower: true }) === lastPartUrl) {
            return (
              <RenderSubMenu
                key={category.name}
                active={lastPartUrl}
                category={category}
              />
            );
          }

          return exists(child.children) && renderHierarchy(child);
        })}
      </NavLink>
    );
  };

  return (
    <React.Fragment>
      {categories.map((category) => (
        <>
          {exists(category.children) &&
            renderHierarchy( category)}
        </>
      ))}
    </React.Fragment>
  );
};

type RenderSubMenuProps = {
  category: Category;
  active?: string;
};
const RenderSubMenu: FC<RenderSubMenuProps> = ({ category, active }) => {
  const [showMore, setShowMore] = React.useState(false);
  const [categories] = React.useState(category.children);
  const [items] = React.useState(
    showMore ? categories : categories?.slice(0, 5),
  );

  return (
    <>
      {items?.map((menuItem) => (
        <NavLink
          label={menuItem.name}
          key={menuItem.name}
          active={active === slugify(menuItem.name, { lower: true })}
        >
          {menuItem.children?.length !== 0 && (
            <RenderSubMenu active={active} category={menuItem} />
          )}
        </NavLink>
      ))}
      {categories && categories.length > 5 && (
        <Anchor onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ẩn bớt" : "Xem Thêm"}
        </Anchor>
      )}
    </>
  );
};
export default HierarchyCategory;
