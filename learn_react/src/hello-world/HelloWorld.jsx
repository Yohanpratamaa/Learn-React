export default function HelloWorld() {
    return (
        // Di dalam satu funcion hanya bisa mengembalikan satu pembungkus saja
        <div>
            <Header />
            {/* Untuk menambahkan value di paragraf */}
            <Paragraf paragraf="Hello World"/>
            <Keterangan />
        </div>
    )
}

// Untuk Function harus menggunakan huruf besar pada awal
function Header(){
    return (
        <h1>Hello World</h1>
    )
}

// Cara menggunakan destructing props atau value default ketika kita tidak memasukkan value
function Paragraf({paragraf = "Ups, Paragraf Default"}){
    return (
        // Cara menggunakan style inline
        <p style={{
            color: "blue",
            backgroundColor: "yellow"
        }}>{paragraf}</p>
    )
}

// Berikut cara menggunakan variable/kode Javascript dan cara memanggilnya di jsx
function Keterangan(){
    const keterangan = "Sudah Makan Belum?";
    return (
        // Menggunakan kurung kurawal {} untuk memanggil variable
        <p style={{
            color: "red"
        }}>{keterangan.toLowerCase()}</p>
    )
}