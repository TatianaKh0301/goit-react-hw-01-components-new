import PropTypes from 'prop-types';
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

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}