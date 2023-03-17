import { Button, OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Make API request or perform some other async operation

    setIsLoading(false);
  }

  const renderTooltip = () => {
    return (
      <Tooltip id="tooltip">
        {isLoading ? 'Loading...' : 'Submit'}
      </Tooltip>
    );
  }

  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="primary" onClick={handleClick} disabled={isLoading}>
          {isLoading ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
      </OverlayTrigger>
    </div>
  );
}

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
