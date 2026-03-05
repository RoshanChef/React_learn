function child({ cnt, setCnt }) {
    return (
        <>
            <h2>Counter {cnt}</h2>
            <button onClick={setCnt(cnt => cnt + 1)}></button>
        </>
    )
}

export default child; 