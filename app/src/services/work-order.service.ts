import TankType from "../models/tank-type.model";
import WorkOrder from "../models/work-order-model";


export async function getWorkOrders() : Promise<WorkOrder[]>{
    
    const workOrders:WorkOrder[] = [
        {
            id: 1,
            workOrderNumber: "wo-100"
        },
        {
            id: 2,
            workOrderNumber: "wo-200"
        }
    ];

    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(workOrders);
    }, 5000); 
  });
}