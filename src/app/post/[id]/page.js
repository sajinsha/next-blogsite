import DetailData from "@/app/components/DetailData";

const page = ({ params: { id } }) => {
  return (
    <>
      <h1> {id && <DetailData id={id} />}</h1>
    </>
  );
};

export default page;
