import { useRouteError } from "react-router-dom";
import Section from "../components/section";
import { Container } from "react-bootstrap";
import TopNav from "../components/top-nav";
import '../App.scss';

interface RouterError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.error(error);

  return (
    <Container className="page-body">
      <TopNav/>
      <Section title="Ooops">
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

      </Section>
    </Container>
  );
}