import MainNav from "./MainNav";
function LayoutPage(props) {
  return (
    <div>
      <MainNav />
      <main>{props.children}</main>
    </div>
  );
}

export default LayoutPage;
