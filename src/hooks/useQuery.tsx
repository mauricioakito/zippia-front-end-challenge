export const useQuery = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        });

        const data = await response.json();
        const statusCode = response.status;

        return {
            data,
            statusCode
        };

        } catch (error) {
            console.error(error)
    }
};