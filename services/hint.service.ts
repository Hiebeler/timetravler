const getHint = async (startYear: number, endYear: number, question: string): Promise<string> => {
    const response = await fetch("/api/hint", {
        method: "POST",
        body: JSON.stringify({ startYear, endYear, question })
    });

    if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message);
    }

    const result = await response.json();
    return result.hint;
}

export const HintService = {
    getHint
}