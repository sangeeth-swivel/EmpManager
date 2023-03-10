import GridItem from './GridItem';

function GridView() {
  return (
    <div className="row">
      <GridItem className="col-4">
        Item 1
      </GridItem>
      <GridItem className="col-4">
        Item 2
      </GridItem>
      <GridItem className="col-4">
        Item 3
      </GridItem>
    </div>
  );
}

export default GridView;