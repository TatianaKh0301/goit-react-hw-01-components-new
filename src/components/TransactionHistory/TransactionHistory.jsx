import { TransactionHistoryDataRow } from "components/TransactionHistoryDataRow/TransactionHistoryDataRow";
import { TransactionHistoryTable, TableHead, TableRow } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    
    return (
        <TransactionHistoryTable>
            <thead>
                <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                </TableRow>
            </thead>

            <tbody>
                {items.map(data => <TableRow key={data.id}>
                                <TransactionHistoryDataRow type={data.type} amount={data.amount} currency={data.currency}/>
                        </TableRow>)
                    
                }
                
            </tbody>
</TransactionHistoryTable>
    );
};
