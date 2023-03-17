import NavBar from "@/components/atoms/NavBar/NavBar";
import ListLayout from "@/components/templates/ListLayout/ListLayout";

function ListEmployee() {
  return (
    <>
      <NavBar />
      <ListLayout employees={[]}/>
    </>
  );
}
export default ListEmployee;
