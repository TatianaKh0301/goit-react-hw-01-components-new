import { TableData } from "./TransactionHistoryDataRow.styled";
export const TransactionHistoryDataRow = ({type, amount, currency}) => {
    console.log("type:", type);
    console.log("amount:", amount);
    console.log("currency:", currency);
    return(
        <>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </>            
    );
};