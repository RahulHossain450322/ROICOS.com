import {} from "react";
import E_Primary_Sec from "./E_DIffer_SEC/E_Primary_Sec";
import E_2ndary from "./E_DIffer_SEC/E_2ndary";
function Export() {
  return (
    <section className="for_blur">
      <div className="con_tainer">
        <div className="py-24">
          <E_Primary_Sec />
          <E_2ndary />
        </div>
      </div>
    </section>
  );
}

export default Export;
