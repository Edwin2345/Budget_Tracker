import {
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";


 
const TABLE_HEAD = ["Category", "Total Amount", "Average Expense"];
 
const TABLE_ROWS = [
  {
   id: 1,
   category: "Household",
   total: 15.67,
   average: 12.30,
  },
 {
   id: 2,
   category: "Transportation",
   total: 156.78,
   average: 10.30,
  },
 {
   id: 3,
   category: "Groceries",
   total: 3.68,
   average: 1.73,
  },
 {
   id: 4,
   category: "Personal",
   total: 2234.56,
   average: 12.34,
  },
 {
   id: 5,
   category: "Savings",
   total: 457.23,
   average: 99.43,
  },
 {
   id: 6,
   category: "Other",
   total: 12.78,
   average: 69.12,
  },

];
 
export function SummaryTable() {
  return (
    <Card className="h-fit rounded-none p-0 m-0">
      <CardBody className="overflow-scroll p-0 m-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="h5"
                    color="black"
                    className="flex items-center justify-between gap-2 font-bold leading-none "
                  >
                    {head}{" "}
                    <ChevronUpDownIcon strokeWidth={3} className="h-5 w-5" />
               
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ category, total, average}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-50";
 
                return (
                  <tr key={category}>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="large"
                          color="blue-gray"
                          className="font-bold text-[1.1rem]"
                        >
                          {category}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="medium"
                          color="blue-gray"
                          className="font-bold text-[1.1rem]"
                        >
                          {total.toFixed(2)}
                        </Typography>
                      </div>
                    </td>
                   <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="medium"
                          color="blue-gray"
                          className="font-bold text-[1.1rem]">
                          {average.toFixed(2)}
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default SummaryTable;