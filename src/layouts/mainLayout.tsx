import MetaTags from "./metaTags";

interface IMainLayout {
  currentURL: string;
  children: React.ReactNode;
}
export default function MainLayout(props: IMainLayout) {
  return (
    <div>
      <MetaTags currentURL="" />
      {props.children}
    </div>
  );
}
