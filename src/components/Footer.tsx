type FooterProps = {
    text: string;
  };
  
  export function Footer(props: FooterProps) {
    return (
      <footer className="footer">
        <p>{props.text}</p>
      </footer>
    );
  }