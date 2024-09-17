// SetBalance.js
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/Provider";
import api from "../Api/Api";

const SetBalance = () => {
    const { user } = useContext(AuthContext);

    const { data: balance = {},isLoading, refetch } = useQuery({
        queryKey: ['balance'],
        queryFn: async () => {
            try {
                const res = await api.get(`/api/v1/balance/${user?.id}`);
                return res.data.balance; // Return just the balance data
            } catch (error) {
                console.error("Error fetching balance:", error);
                throw new Error("Failed to fetch balance");
            }
        },
    });

    

    return [balance, refetch];
};

export default SetBalance;
