import { Card, Typography ,Button } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Customer", "Order_No", "Amount", "Status"];
 
const TABLE_ROWS = [
  {
    Customer: "John Michael",
    Order_No: "123456",
    Amount: "$123",
    Status:"Pending"
  },
  {
    Customer: "John Michael",
    Order_No: "123456",
    Amount: "$123",
    Status:"Cancelled"
  },
  {
    Customer: "John Michael",
    Order_No: "123456",
    Amount: "$123",
    Status:"Delivered"
  },
  {
    Customer: "John Michael",
    Order_No: "123456",
    Amount: "$123",
    Status:"Delivered"
  },
  {
    Customer: "John Michael",
    Order_No: "123456",
    Amount: "$123",
    Status:"Cancelled"
  },
];
 
 const MyTable = ()   => {
  return (
    
    <Card className="h-full w-full  bg-[#202028] text-white overflow-hidden">
      <table className="w-full min-w-max table-auto text-left   ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-[#202028] p-4 text-white"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-white" 
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Customer, Order_No, Amount,Status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 text-white";
 
            return (
              <tr key={Customer}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white flex flex-row justify-start items-center"
                  >

                  <div className=" text-[#808184] m-1 border-none rounded-full  bg-[#44454a]">
                <img
                  width="30rem"
                  height="30rem"
                  className="rounded-full object-fill "
                  src="../images/vipinimg1.jpg"
                ></img>
              </div>  {Customer}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {Order_No}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {Amount}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className={` rounded-lg px-1 text-center font-semibold ${Status==="Pending" ? " text-red-500  bg-red-100" : " "}
                     ${Status==="Delivered" ? " text-green-600  bg-green-100" : " "}
                       ${Status==="Cancelled" ? " text-red-500  bg-red-100" : " "}
                    `}
                  >
                    {Status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default MyTable;