export const Pricing_Table = () => {
  return (
    <div
      className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px]  flex justify-center items-center mx-auto "
      data-aos="fade-down"
    >
      <div className="lg:w-[1031px] lg:h-[552px]  md:w-[689px] md:h-[464px] w-[355px] h-[832px] mx-auto">
        {/* Large Screen /*/}
        <div>
          <div className="text-[40px] leading-[48px] tracking-[4.17px] flex justify-center items-center font-bold py-5 ">
            <h1>COMPARE</h1>
          </div>
          <table className="w-full ">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">The Features</th>
                <th className="border px-4 py-2">Basic</th>
                <th className="border px-4 py-2">Pro</th>
                <th className="border px-4 py-2">Business</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Unlimited Story Posting</td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Unlimited Photo Upload</td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Embedding Custom Content</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Customize Metadata</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Advanced Metrics</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Photo Downloads</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">✔</td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Search Engine Indexing</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Custom Analytics</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
