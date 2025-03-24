export default function HelloWorld() {
    return (
        // Di dalam satu funcion hanya bisa mengembalikan satu pembungkus saja
        <div>
            <Header />
            <Paragraf />
        </div>
    )
}

// Untuk Function harus menggunakan huruf besar pada awal
function Header(){
    return (
        <h1>Hello World</h1>
    )
}

function Paragraf(){
    return (
        <p>Ini adalah pertama belajar react saya dari programmer Yohan</p>
    )
}