import { Layout } from "../components/layout";
import banner from "../assets/banner.png";
import UseongMap from "../components/Useong";
export const Home = () => {
  return (
    <Layout>
      <img src={banner} className="banner" alt="banner" />
      <div>
        <UseongMap />
      </div>
    </Layout>
  );
};
