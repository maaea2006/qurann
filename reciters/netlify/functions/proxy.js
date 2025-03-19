exports.handler = async (event) => {
    const url = decodeURIComponent(event.queryStringParameters.url);
    try {
        const response = await fetch(url);
        const data = await response.text();
        return {
            statusCode: 200,
            body: data,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': response.headers.get('Content-Type')
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};