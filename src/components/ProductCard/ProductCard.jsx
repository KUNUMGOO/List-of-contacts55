import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ item, handleDelete, handleEdit }) {
  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "15px",
        margin: "5px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Surname: {item.surname}
          <br /> Phone: {item.phone}
          <br /> Email: {item.email}
        </Card.Text>
        <Button onClick={(id) => handleDelete(item.id)} variant="success">
          delete
        </Button>
        <Button onClick={() => handleEdit(item.id)} variant="primary">
          edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
