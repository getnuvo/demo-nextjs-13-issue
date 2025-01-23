import dynamic from "next/dynamic";
import { ConfigureAPI } from "nuvo-react";

let PassSubmitResult: any;
let RejectSubmitResult: any;

const Home = () => {
  const NuvoImporter = dynamic<ConfigureAPI>(
    async () => {
      return import("nuvo-react").then((item) => {
        PassSubmitResult = item.PassSubmitResult;
        RejectSubmitResult = item.RejectSubmitResult;
        return item.NuvoImporter;
      });
    },
    { ssr: false, loading: () => <p>Loading...</p> }
  );

  return (
    <div>
      <NuvoImporter
        licenseKey="YOUR_LICENSE_KEY"
        settings={{
          columns: [],
          identifier: "",
        }}
      />
    </div>
  );
};

export default Home;
