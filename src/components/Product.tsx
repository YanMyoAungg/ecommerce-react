import { Button, Card, Image } from "@chakra-ui/react";
import { Product as ProductType } from "../types/Product";
import { useNavigate } from "react-router";

type Props = {
  product: ProductType;
  detail: boolean;
};

const Product = ({ product, detail }: Props) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  return (
    <Card.Root border={0} onClick={() => handleClick(product.id)}>
      <Card.Body gap={2}>
        <Image width={"full"} mb={"2em"} height={"200px"} src={product.image} />
        <Card.Title fontSize={"sm"} lineClamp={detail ? undefined : 1}>
          {product.title}
        </Card.Title>
        <Card.Description
          fontSize={"xs"}
          lineClamp={detail ? undefined : 3}
          overflow={detail ? "visible" : "hidden"}
          textOverflow={detail ? "" : "ellipsis"}
        >
          {product.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="center" bottom={0}>
        <Button width="100%">View</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default Product;
