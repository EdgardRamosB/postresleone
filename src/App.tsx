import { useState } from "react";

type Product = {
  name: string;
  price: number;
  image: string;
  tag?: string;
};

const products: Product[] = [
  {
    name: "Pie de manzana",
    price: 35,
    image: "/productos/pie-manzana.png",
    tag: "♡ Favorito",
  },
  {
    name: "Tartaleta de maracuyá",
    price: 50,
    image: "/productos/tartaleta-maracuya.png",
  },
  {
    name: "Cheesecake de maracuyá",
    price: 65,
    image: "/productos/cheesecake-maracuya.png",
  },
  {
    name: "Tartaleta de fresa",
    price: 50,
    image: "/productos/tartaleta-fresa.png",
  },
  {
    name: "Cheesecake de fresa",
    price: 65,
    image: "/productos/cheesecake-fresa.png",
    tag: "♡ Cuki approved",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf6] text-[#451326]">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header
        className="relative z-[100] bg-transparent"
        style={{
          backgroundImage: "url('/fondos/fondo-tapiz.png')",
          backgroundSize: "100% 730px",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="mx-auto flex h-[105px] max-w-[1250px] items-center justify-between px-4 pt-2 sm:h-[115px] sm:px-5 md:h-[120px] md:px-8 md:pt-4">

          {/* LOGO */}

          <button
            onClick={() => goTo("inicio")}
            className="relative z-10 mt-7 flex items-center sm:mt-9 md:mt-12"
          >
            <img
              src="/logo/dulce-y-cuki.png"
              alt="Dulce y Cuki"
              className="h-[68px] w-auto object-contain sm:h-[78px] md:h-[138px]"
            />
          </button>


          {/* =====================================================
              MENU DESKTOP
          ===================================================== */}

          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-12">

            <button
              onClick={() => goTo("inicio")}
              className="handwriting text-[20px] font-bold text-[#f02f82] transition hover:scale-105 lg:text-[21px]"
            >
              Inicio
            </button>

            <button
              onClick={() => goTo("menu")}
              className="handwriting text-[20px] font-bold text-[#26151c] transition hover:text-[#f02f82] lg:text-[21px]"
            >
              Menú
            </button>

            <button
              onClick={() => goTo("pedidos")}
              className="handwriting text-[20px] font-bold text-[#26151c] transition hover:text-[#f02f82] lg:text-[21px]"
            >
              Pedidos
            </button>

            <button
              onClick={() => goTo("sobre-mi")}
              className="handwriting text-[20px] font-bold text-[#26151c] transition hover:text-[#f02f82] lg:text-[21px]"
            >
              Sobre mí
            </button>

            <button
              onClick={() => goTo("pedidos")}
              className="text-[28px] leading-none transition hover:scale-110 lg:text-[31px]"
              aria-label="Carrito"
            >
              🛒
            </button>

            <button
              onClick={() => goTo("pedidos")}
              className="handwriting text-[38px] leading-none text-[#431526] transition hover:scale-110 lg:text-[42px]"
              aria-label="Favoritos"
            >
              ♡
            </button>

          </nav>


          {/* =====================================================
              MOBILE
          ===================================================== */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[110] rounded-full bg-[#fbd8e2] px-3.5 py-2 text-lg shadow-sm sm:px-4 sm:text-xl md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {menuOpen && (
          <div className="mx-4 mb-4 rounded-[25px] border border-[#f2ccd7] bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:mx-5 md:hidden">

            <div className="flex flex-col gap-1">

              <button
                onClick={() => goTo("inicio")}
                className="handwriting rounded-2xl px-4 py-3 text-left text-lg font-bold hover:bg-[#fde7ed]"
              >
                Inicio
              </button>

              <button
                onClick={() => goTo("menu")}
                className="handwriting rounded-2xl px-4 py-3 text-left text-lg font-bold hover:bg-[#fde7ed]"
              >
                Menú
              </button>

              <button
                onClick={() => goTo("pedidos")}
                className="handwriting rounded-2xl px-4 py-3 text-left text-lg font-bold hover:bg-[#fde7ed]"
              >
                Pedidos
              </button>

              <button
                onClick={() => goTo("sobre-mi")}
                className="handwriting rounded-2xl px-4 py-3 text-left text-lg font-bold hover:bg-[#fde7ed]"
              >
                Sobre mí
              </button>

            </div>

          </div>
        )}

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <main id="inicio">

{/* =========================================================
    HERO
========================================================= */}

    <section
      className="
        relative
        h-[760px]
        overflow-hidden
        bg-transparent
        sm:h-[790px]
        md:h-[610px]
      "
      style={{
        backgroundImage: "url('/fondos/fondo-tapiz.png')",
        backgroundSize: "100% 730px",
        backgroundPosition: "center -120px",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* CAPA SUAVE */}

      <div className="pointer-events-none absolute inset-0 bg-[#fffaf6]/5" />


      {/* =========================================================
          CONTENEDOR PRINCIPAL
      ========================================================= */}

      <div className="relative mx-auto h-full max-w-[1250px] px-4 sm:px-5 md:px-8">


        {/* =======================================================
            COLUMNA IZQUIERDA
        ======================================================= */}

        <div
          className="
            relative
            z-[90]
            pt-[25px]
            sm:pt-[30px]
            md:absolute
            md:left-0
            md:top-0
            md:w-[44%]
            md:pt-[38px]
          "
        >

          <h1
            className="
              handwriting-title
              max-w-[570px]
              text-[43px]
              font-black
              leading-[0.88]
              tracking-[-1px]
              text-[#421326]
              sm:text-[52px]
              md:text-[65px]
            "
          >
            Porque la vida

            <span className="block">
              es más dulce
            </span>

            <span className="block">
              con un{" "}
              <span className="text-[#ed2e80]">
                postre
              </span>
            </span>
          </h1>


          <div className="handwriting mt-0 text-[43px] leading-none text-[#411426] sm:text-[48px] md:text-[52px]">
            ♡
          </div>


          <p className="handwriting mt-3 max-w-[330px] text-[16px] font-bold leading-[1.1] text-[#351820] sm:text-[18px] md:mt-4 md:max-w-[370px] md:text-[19px]">
            Kekes, tortas y postres caseros
            <br />
            hechos con mucho amor
            <br />
            (y un toque de locura)
          </p>


          <button
            onClick={() => goTo("menu")}
            className="
              handwriting
              mt-4
              rounded-full
              bg-[#f42f82]
              px-6
              py-3
              text-[16px]
              font-bold
              text-white
              shadow-[0_8px_18px_rgba(242,47,130,0.25)]
              transition
              hover:-translate-y-1
              hover:bg-[#e62a78]
              sm:mt-5
              sm:px-7
              sm:py-3.5
              sm:text-[17px]
            "
          >
            🛒 Haz tu pedido →
          </button>


          <div className="handwriting mt-3 flex items-center gap-2 text-[15px] font-bold text-[#351820] sm:mt-5 sm:text-[17px]">
            <span className="text-[21px] sm:text-[24px]">
              📍
            </span>

            Lima, Perú
          </div>


          <div className="absolute -left-1 top-[220px] rotate-[-12deg] text-[24px] sm:top-[275px] sm:text-[28px]">
            ♡
          </div>


          <div className="absolute right-[5%] top-[8px] rotate-[-12deg] text-[22px] md:left-[45%] md:right-auto md:top-[20px] md:text-[25px]">
            ✦
          </div>

        </div>


        {/* =======================================================
            COLUMNA DERECHA
            IMPORTANTE:
            En desktop volvemos a tener la misma columna que tu
            diseño original. Así las imágenes no se mueven.
        ======================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            top-[275px]
            sm:top-[285px]
            md:relative
            md:ml-[44%]
            md:h-full
            md:w-[56%]
            md:inset-auto
          "
        >

          {/* =====================================================
              FRASE
          ===================================================== */}

          <div
            className="
              handwriting
              absolute
              right-[5%]
              top-[-70px]
              z-[70]
              rotate-[-5deg]
              text-right
              text-[22px]
              font-bold
              leading-[0.9]
              text-[#641a37]
              sm:right-[6%]
              sm:top-[-60px]
              sm:text-[25px]
              md:left-[2%]
              md:right-auto
              md:top-[35px]
              md:text-left
              md:text-[30px]
            "
          >
            ♡ Postres
            <br />
            que enamoran ♡
          </div>


          {/* =====================================================
              DUEÑA
          ===================================================== */}

          <img
            src="/hero/duena.png"
            alt="Creadora de Dulce y Cuki"
            className="
              absolute
              bottom-[100px]
              right-[-2%]
              z-20
              h-[360px]
              w-auto
              object-contain
              drop-shadow-[0_12px_16px_rgba(65,20,30,0.12)]
              sm:bottom-[105px]
              sm:right-[-1%]
              sm:h-[405px]
              md:right-[-19%]
              md:top-[-5px]
              md:bottom-auto
              md:h-[530px]
            "
          />


          {/* =====================================================
              CHEESECAKE
          ===================================================== */}

          <img
            src="/hero/cheesecake-hero.png"
            alt="Cheesecake de fresa"
            className="
              absolute
              bottom-[13px]
              left-1/2
              z-30
              w-[285px]
              -translate-x-1/2
              rotate-[-2deg]
              object-contain
              drop-shadow-[0_14px_17px_rgba(70,25,25,0.22)]
              sm:bottom-[12px]
              sm:w-[345px]
              md:bottom-[27px]
              md:left-[4%]
              md:w-[430px]
              md:max-w-[76%]
              md:translate-x-0
            "
          />


          {/* =====================================================
              CUKI
          ===================================================== */}

          <img
            src="/hero/cuki.png"
            alt="Cuki"
            className="
              absolute
              bottom-[3px]
              left-[-7%]
              z-50
              w-[205px]
              rotate-[-4deg]
              object-contain
              drop-shadow-[0_8px_12px_rgba(40,15,20,0.22)]
              sm:left-[-2%]
              sm:w-[245px]
              md:bottom-[-5px]
              md:left-[-30%]
              md:w-[390px]
            "
          />


          {/* =====================================================
              POST-IT
          ===================================================== */}

          <div
            className="
              handwriting
              absolute
              right-[2%]
              top-[105px]
              z-[80]
              rotate-[-7deg]
              bg-[#ffe8ad]
              px-3
              py-2.5
              text-[13px]
              font-bold
              leading-[1.35]
              text-[#29151b]
              shadow-[2px_5px_10px_rgba(50,20,20,0.15)]
              sm:right-[4%]
              sm:top-[120px]
              sm:px-4
              sm:py-3
              sm:text-[15px]
              md:right-[-6%]
              md:top-[240px]
              md:px-5
              md:py-4
              md:text-[17px]
              md:leading-[1.45]
            "
          >
            ✓ Abogada
            <br />
            ✓ Gym
            <br />
            ✓ Postres
            <br />
            ✓ Yo ♡
          </div>


          {/* =====================================================
              DOODLES
          ===================================================== */}

          <div className="handwriting absolute left-[42%] top-[65px] z-[80] rotate-[10deg] text-[24px] sm:top-[80px] sm:text-[28px] md:left-[30%] md:top-[125px] md:text-[31px]">
            ♡
          </div>

          <div className="handwriting absolute right-[9%] bottom-[55px] z-[80] rotate-[10deg] text-[25px] sm:text-[28px] md:right-[8%] md:bottom-[72px] md:text-[31px]">
            ♡
          </div>

          <div className="absolute left-[46%] bottom-[115px] z-[80] rotate-[-8deg] text-[20px] sm:text-[23px] md:left-[34%] md:bottom-[145px] md:text-[25px]">
            ✦
          </div>

          <div className="handwriting absolute right-[25%] top-[115px] z-[80] text-[19px] sm:text-[21px] md:right-[22%] md:top-[180px] md:text-[23px]">
            ♡
          </div>

        </div>


        {/* =========================================================
            DECORACIONES DE BORDE
        ========================================================= */}

        <div className="absolute bottom-[8px] left-[5%] rotate-[-10deg] text-[24px] sm:text-[28px]">
          ♡
        </div>

        <div className="absolute bottom-[12px] right-[6%] rotate-[12deg] text-[22px] sm:text-[25px]">
          ✦
        </div>

      </div>

    </section>


        {/* =========================================================
            MENU
        ========================================================= */}

        <section
          id="menu"
          className="relative bg-[#fffaf7] px-4 pb-20 pt-8 sm:px-5 sm:pb-24 md:px-8"
        >

          {/* DECORACIONES */}

          <div className="absolute left-[5%] top-[25px] rotate-[-15deg] text-2xl text-[#f06c9b] sm:left-[8%] sm:text-3xl">
            ♡
          </div>

          <div className="absolute right-[6%] top-[35px] rotate-[12deg] text-2xl text-[#f06c9b] sm:right-[10%] sm:text-3xl">
            ♡
          </div>


          <div className="relative mx-auto max-w-[1180px]">

            {/* TÍTULO */}

            <div className="mb-7 text-center sm:mb-8">

              <h2 className="handwriting-title text-[40px] font-black leading-none text-[#5b1830] sm:text-[48px] md:text-[58px]">
                ♡ Nuestro Menú ♡
              </h2>

            </div>


            {/* PRODUCTOS */}

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">

              {products.map((product) => (

                <article
                  key={product.name}
                  className="
                    group
                    relative
                    rounded-[18px]
                    border-2
                    border-[#f2cbd6]
                    bg-[#fffaf8]
                    p-2
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-lg
                    sm:rounded-[20px]
                    sm:p-2.5
                  "
                >

                  {/* TAG */}

                  {product.tag && (
                    <div className="handwriting absolute left-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-[8px] font-bold text-[#d52f6d] shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                      {product.tag}
                    </div>
                  )}


                  {/* IMAGEN */}

                  <div className="h-[125px] overflow-hidden rounded-[12px] bg-[#fff0f2] sm:h-[150px] md:h-[165px] md:rounded-[14px]">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>


                  {/* TEXTO */}

                  <div className="px-0.5 pb-1.5 pt-2 text-center sm:px-1 sm:pb-2 sm:pt-3">

                    <h3 className="handwriting text-[14px] font-bold leading-[1.05] text-[#351720] sm:text-[16px] md:text-[17px]">
                      {product.name}
                    </h3>

                    <div className="handwriting mt-1 text-[18px] font-black text-[#ed3480] sm:text-[20px]">
                      S/{product.price}
                    </div>

                  </div>

                </article>

              ))}

            </div>


            {/* FRASES INFERIORES */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:mt-10 sm:gap-8">

              <div className="handwriting flex items-center gap-1.5 text-[14px] font-bold text-[#57192f] sm:gap-2 sm:text-[16px]">
                <span className="text-2xl sm:text-3xl">
                  🐾
                </span>
                Hechos con amor
              </div>

              <div className="handwriting flex items-center gap-1.5 text-[14px] font-bold text-[#57192f] sm:gap-2 sm:text-[16px]">
                <span className="text-2xl sm:text-3xl">
                  ♡
                </span>
                Ingredientes de calidad
              </div>

              <div className="handwriting flex items-center gap-1.5 text-[14px] font-bold text-[#57192f] sm:gap-2 sm:text-[16px]">
                <span className="text-2xl sm:text-3xl">
                  🍰
                </span>
                Postres caseros
              </div>

              <div className="handwriting text-[19px] font-bold text-[#e72e79] sm:text-[21px]">
                ¡Endulza tu día!
              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            SOBRE MÍ
        ========================================================= */}

        <section
          id="sobre-mi"
          className="relative overflow-hidden bg-[#fce2e8] px-5 py-16 sm:py-20 md:px-8 md:py-24"
        >

          <div className="mx-auto grid max-w-[1050px] items-center gap-8 sm:gap-10 md:grid-cols-2">

            <div className="text-center">

              <img
                src="/hero/duena.png"
                alt="Creadora de Dulce y Cuki"
                className="mx-auto h-[330px] w-auto object-contain sm:h-[380px] md:h-[430px]"
              />

            </div>


            <div className="text-center md:text-left">

              <span className="handwriting text-2xl font-bold text-[#ed3480] sm:text-3xl">
                hola, soy yo ♡
              </span>

              <h2 className="handwriting-title mt-3 text-[39px] font-black leading-[0.95] text-[#50172a] sm:text-[45px] md:text-[48px]">
                La chica detrás de Dulce y Cuki
              </h2>

              <p className="handwriting mt-5 text-[17px] leading-7 text-[#684551] sm:text-[19px]">
                Me encantan los postres, los perros, el gym y crear cosas
                bonitas.
              </p>

              <p className="handwriting mt-4 text-[17px] leading-7 text-[#684551] sm:text-[19px]">
                Así nació Dulce y Cuki: un pequeño proyecto hecho con mucho
                cariño, ganas y obviamente... bastante azúcar. 🍓
              </p>


              <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:justify-start">

                <span className="handwriting rounded-full bg-white px-3.5 py-2 text-sm font-bold sm:px-4 sm:text-base">
                  ⚖️ Abogada
                </span>

                <span className="handwriting rounded-full bg-white px-3.5 py-2 text-sm font-bold sm:px-4 sm:text-base">
                  🏋️ Gym
                </span>

                <span className="handwriting rounded-full bg-white px-3.5 py-2 text-sm font-bold sm:px-4 sm:text-base">
                  🍰 Postres
                </span>

                <span className="handwriting rounded-full bg-white px-3.5 py-2 text-sm font-bold sm:px-4 sm:text-base">
                  🐶 Cuki
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            PEDIDOS
        ========================================================= */}

        <section
          id="pedidos"
          className="relative overflow-hidden bg-[#57172e] px-5 py-16 text-center text-white sm:py-20 md:py-24"
        >

          <div className="absolute left-[5%] top-[25px] rotate-[-10deg] text-4xl text-[#f58aaa] sm:left-[8%] sm:text-5xl">
            ♡
          </div>

          <div className="absolute right-[5%] bottom-[25px] rotate-[10deg] text-4xl text-[#f58aaa] sm:right-[8%] sm:text-5xl">
            ✦
          </div>


          <div className="relative mx-auto max-w-[650px]">

            <div className="text-4xl sm:text-5xl">
              🍰
            </div>

            <h2 className="handwriting-title mt-4 text-[43px] font-black sm:text-[50px] md:text-[54px]">
              ¿Se te antojó?
            </h2>

            <p className="handwriting mx-auto mt-4 max-w-lg text-[17px] leading-7 text-[#f8dce3] sm:mt-5 sm:text-[19px]">
              Escríbeme y coordinamos tu pedido.
              <br />
              Cuki promete no comerse tu postre... probablemente. 🐶
            </p>

            <button
              onClick={() => {
                // Aquí puedes colocar posteriormente WhatsApp
              }}
              className="handwriting mt-7 rounded-full bg-[#f42f82] px-7 py-3.5 text-[17px] font-bold shadow-lg transition hover:-translate-y-1 sm:mt-8 sm:px-8 sm:py-4 sm:text-[18px]"
            >
              Hacer mi pedido ♡
            </button>

          </div>

        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#fffaf6] px-5 py-10 text-center">

        <img
          src="/logo/dulce-y-cuki.png"
          alt="Dulce y Cuki"
          className="mx-auto h-[65px] w-auto object-contain sm:h-[76px] md:h-[88px]"
        />

        <p className="handwriting mt-3 text-[16px] text-[#805b66] sm:text-[17px]">
          Postres que hacen feliz ♡
        </p>

        <p className="mt-4 text-xs text-[#a47782]">
          Lima, Perú · Dulce y Cuki © 2026
        </p>

      </footer>

    </div>
  );
}

export default App;