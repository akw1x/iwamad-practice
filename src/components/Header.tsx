type HeaderProps = {
    title: string;
  };
  
  export function Header(props: HeaderProps) {
    return (
      <header className="header">
        <h1>{props.title}</h1>
      </header>
    );
  }