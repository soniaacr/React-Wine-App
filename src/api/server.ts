const token = 'fad0c8a90beab7305aa295d87be0ad44b598eb1a115c552a'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://flask-wine-app.onrender.com/api/wines`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

        },

        create: async(data: any = {}) => {
            const response = await fetch(`https://flask-wine-app.onrender.com/api/wines`,{   
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(data)
            });
    
            if(!response.ok){
                throw new Error('Failed to Create new data on server')
            }
    
            return await response.json()
    },
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://flask-wine-app.onrender.com/api/wines/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                
            },
            body: JSON.stringify(data)
        })
            if (!response.ok) {
                throw new Error('Failed to update data on server')
            }

            return await response.json()
        },

        delete: async(id:string) => {
            const response = await fetch(`https://flask-wine-app.onrender.com/api/wines/${id}`,{   
            method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                    
                },
    
            })
        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}