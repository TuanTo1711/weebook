import { type FC } from "react";

interface DetailsPageProps {
  params: { name: string };
}

const DetailsPage: FC<DetailsPageProps> = ({ params }) => {
  // const productInfo = await api.product.getByName.query(params.name);
  return <>{params.name}</>;
};

export default DetailsPage;
