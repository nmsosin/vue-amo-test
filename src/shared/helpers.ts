// table data mapper
import { Column } from "./types";

export const toTableData = (res) => {
  let mappedData: Column[] = [];
  for (let i = 0; i < res.length; i++) {
    mappedData.push({
      key: res[i].id,
      name: res[i].name,
      budget: res[i].price,
      statusName: res[i].status.name,
      tagColor: res[i].status.color,
      bailee: res[i].user.name,
      createDt: `${new Date(res[i].created_at).toLocaleDateString("ru-RU")} ${new Date(res[i].created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      `,
      contacts: res[i].contact,
    })
  }
  
  return mappedData;
}