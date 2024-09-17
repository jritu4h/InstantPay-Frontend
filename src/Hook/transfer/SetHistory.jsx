import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import api from "../Api/Api";

const SetHistory = ({ types }) => {
    const [transactionType, setTransactionType] = useState(types);

    const { data: trans = [], refetch } = useQuery({
        queryKey: ['transferhistory', transactionType], // Include transactionType in queryKey
        queryFn: async () => {
            try {
                const res = await api.get(`/api/v1/transactions/type?type=${transactionType}`);
                return res.data; // Return the entire response data
            } catch (error) {
                console.error("Error fetching transactions:", error);
                throw new Error("Failed to fetch transactions");
            }
        },
    });

    // Function to handle type change and refetch data
    const handleTypeChange = (newType) => {
        setTransactionType(newType);
        refetch();
    };

    return { trans, handleTypeChange };
};

export default SetHistory;
