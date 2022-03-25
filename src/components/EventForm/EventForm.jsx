import { useContext } from "react";
import { Form } from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { AuthenticationContext } from "../../components/AuthContext/AuthContext";
import { Input } from "../../components/Input/Input";

export function EventForm({ id }) {
  const {
    registered,
    isLoggedIn,
    addToRegistrations,
    removeFromRegistrations,
  } = useContext(AuthenticationContext);

  const register = () => {
    addToRegistrations(id);
  };

  const unregister = () => {
    removeFromRegistrations(id);
  };

  if (!isLoggedIn) {
    return <h3>Skráðu þig inn til að skrá þig á viðburð</h3>;
  }

  if (registered && registered.includes(id)) {
    return (
      <>
        <p style={{ padding: "1rem 0" }}>
          {" "}
          þú hefur verið skráð/ur á viðburðinn!{" "}
        </p>
        <Button type="submit" onClick={unregister}>
          {" "}
          Afskrá mig{" "}
        </Button>
      </>
    );
  }

  return (
    <Form>
      <Input text="Athugasemd" type="textarea" />
      <Button onClick={register} type="submit">
        {" "}
        Skrá mig{" "}
      </Button>
    </Form>
  );
}
