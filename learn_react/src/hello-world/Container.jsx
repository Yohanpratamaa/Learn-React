export default function Container({children}){
    return (
        <div>
            <h1>Yohan Artha Pratama</h1>
            {/* Cara menggunakan nested component yaitu dengan menggunakan children */}
            {children}

            <footer>
                <p>2024 YAP</p>
            </footer>
        </div>
    )
}