function WrapperApp() {
  return (
    <div>
      <CardWrapper1 innerComponent={<TextComponent />} />
      <CardWrapper2>Hey Buddy!</CardWrapper2>
      <CardWrapper2>
        <TextComponent />
      </CardWrapper2>
    </div>
  );
}

function TextComponent() {
  return <div>hi there!</div>;
}
function CardWrapper1({ innerComponent }) {
  return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
}

//children acces all the things written between <Cardwrapper /> in this case which is -- Hey Buddy
function CardWrapper2({ children }) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default WrapperApp;
