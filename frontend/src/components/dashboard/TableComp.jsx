import {
  TrashIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon} from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";


 
const TABLE_HEAD = ["Expense Summary", "Amount", "Category", "Date", "", ""];
 
const TABLE_ROWS = [
  {
    job: "Manager",
    value: 12.34,
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    job: "Executive",
    value: 122.34,
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    job: "Programator",
    value: 124.34,
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    job: "Manager",
    value: 9.56,
    org: "Executive",
    online: false,
    date: "04/10/21",
  }
];
 


export function TableComp({setForceRefetch}) {
 
   function editHandler(){
      setForceRefetch((prev)=>!prev);
   }

  function deleteHandler(){
      setForceRefetch((prev)=>!prev);
   }
   

  return (
    <Card className="h-fit w-full rounded-none p-0 m-0">
      <CardBody className="overflow-scroll p-0 m-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="h5"
                    color="black"
                    className="flex items-center justify-between gap-2 font-bold leading-none "
                  >
                    {head}{" "}
                    {index < TABLE_HEAD.length - 2 && (
                      <ChevronUpDownIcon strokeWidth={3} className="h-5 w-5" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ job, value, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-50";
 
                return (
                  <tr key={date}>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-[1.1rem]"
                        >
                          {job}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-[1.1rem]"
                        >
                          {value}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold text-[1.1rem]"
                      >
                        {date}
                      </Typography>
                    </td>
                     <td className={classes}>
                      <Tooltip content="Edit Expense">
                        <IconButton variant="text" onClick={editHandler}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                     <td className={classes}>
                      <Tooltip content="Delete Expense">
                        <IconButton variant="text" onClick={deleteHandler}>
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
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

export default TableComp;