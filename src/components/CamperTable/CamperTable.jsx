import css from "./CamperTable.module.css";

const CamperTable = ({ pickup }) => {
  const {
    form = "",
    length = "",
    width = "",
    height = "",
    tank = "",
    consumption = "",
  } = pickup;

  const formatForm = (form) => {
    switch (form) {
      case "fullyIntegrated":
        return "Fully integrated";
      case "alcove":
        return "Alcove";
      case "panelTruck":
        return "Panel truck";
      default:
        return form.charAt(0).toUpperCase() + form.slice(1);
    }
  };
  const formattedLength =
    length && `${parseFloat(length)} ${length.replace(/^[0-9.]+/, "")}`;
  const formattedWidth =
    width && `${parseFloat(width)} ${width.replace(/^[0-9.]+/, "")}`;
  const formattedHeight =
    height && `${parseFloat(height)} ${height.replace(/^[0-9.]+/, "")}`;
  const formattedTank = tank && `${parseInt(tank)} ${tank.replace(/^\d+/, "")}`;
  const formattedConsumption =
    consumption &&
    `${parseFloat(consumption)}${consumption.replace(/^[0-9.]+/, "")}`;

  return (
    <div className={css.tableContainer}>
      <table className={css.camperTable}>
        <tbody>
          {[
            {
              label: "Form",
              value: formatForm(form),
            },
            {
              label: "Length",
              value: formattedLength,
            },
            {
              label: "Width",
              value: formattedWidth,
            },
            {
              label: "Height",
              value: formattedHeight,
            },
            {
              label: "Tank",
              value: formattedTank,
            },
            {
              label: "Consumption",
              value: formattedConsumption,
            },
          ].map(
            ({ label, value }, index) =>
              value !== 0 &&
              value !== "" && (
                <tr className={css.camperTableRow} key={index}>
                  <td className={css.tableLeft}>{label}</td>
                  <td className={css.tableRight}>{value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CamperTable;
