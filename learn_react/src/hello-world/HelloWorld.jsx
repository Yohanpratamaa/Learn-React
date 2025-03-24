// Cara untuk memanggil css external
import './HelloWorld.css'


export default function HelloWorld() {

    const props = {
        paragraf: "Hello World Saya Yohan"
    }

    return (
        // Di dalam satu funcion hanya bisa mengembalikan satu pembungkus saja
        <div>
            <Header />
            {/* Untuk menambahkan value di paragraf */}
            <Paragraf paragraf={props.paragraf}/>
            {/* Spread Syntax adalah untuk meforward semua props ke child component ... */}
            <Paragraf {...props}/>
            <Keterangan />
        </div>
    )
}

// Untuk Function harus menggunakan huruf besar pada awal
function Header(){
    return (
        <h1 className='title'>Hello World</h1>
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
        <p className='content'>{keterangan.toLowerCase()}</p>
    )
}