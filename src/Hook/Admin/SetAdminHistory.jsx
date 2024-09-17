import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import api from "../Api/Api";

const SetAdminHistory = ({ types }) => {
    const [transactionType, setTransactionType] = useState(types);
    const [page, setPage] = useState(1); // State to track the current page

    const { data, refetch } = useQuery({
        queryKey: ['transferhistory', transactionType, page], // Include transactionType and page in queryKey
        queryFn: async () => {
            try {
                const res = await api.get(`/api/v1/transactions/admin/type?type=${transactionType}&page=${page}&limit=10`);
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
        setPage(1); // Reset to the first page when type changes
        refetch();
    };

    // Function to handle page change
    const handlePageChange = (newPage) => {
        setPage(newPage);
        refetch();
    };

    return { data, handleTypeChange, handlePageChange, page };
};

export default SetAdminHistory;