import { useEffect, useState } from "react";



type Product = {

  name: string;

  price?: number;

  slicePrice?: number;

  image: string;

  tag?: string;

  presentation?: string;

  isKeke?: boolean;

};



const products: Product[] = [

  {

    name: "Pie de manzana",

    price: 35,

    slicePrice: 5,

    image: "/productos/pie-manzana.png",

    tag: "♡ Favorito",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Tartaleta de maracuyá",

    price: 50,

    slicePrice: 7,

    image: "/productos/tartaleta-maracuya.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Cheesecake de maracuyá",

    price: 65,

    slicePrice: 9,

    image: "/productos/cheesecake-maracuya.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Tartaleta de fresa",

    price: 50,

    slicePrice: 7,

    image: "/productos/tartaleta-fresa.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Cheesecake de fresa",

    price: 65,

    slicePrice: 9,

    image: "/productos/cheesecake-fresa.png",

    tag: "♡ Cuki approved",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Alfajores de maicena",

    image: "/productos/alfajores-de-maicena.png",

    tag: "♡ Para compartir",

    presentation: "½ docena S/10 · docena S/20",

  },

  {

    name: "Crema volteada",

    price: 35,

    slicePrice: 5,

    image: "/productos/crema-volteada.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Keke",

    price: 30,

    slicePrice: 3,

    image: "/productos/keke-sabores-variados.png",

    presentation: "Molde · sabores variados",

    isKeke: true,

  },

  {

    name: "Pie de piña",

    price: 40,

    slicePrice: 5.5,

    image: "/productos/pie-de-piña.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Cheesecake de Oreo",

    price: 60,

    slicePrice: 8,

    image: "/productos/cheesecake-oreo.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Tartaleta de maracumango",

    price: 55,

    slicePrice: 7.5,

    image: "/productos/tartaleta-maracumango.png",

    presentation: "Molde · 8 porciones",

  },

  {

    name: "Enrollados de hot dog",

    price: 4,

    image: "/productos/enrrollado.png",

    presentation: "Cada uno",

  },

];



const kekeFlavors = [

  {

    name: "Chocolate",

    image: "/productos/kekes/keke-chocolate.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Naranja",

    image: "/productos/kekes/keke-naranja.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Arándanos",

    image: "/productos/kekes/keke-arandanos.png",

    slicePrice: 3.5,

    moldPrice: 35,

    special: true,

  },

  {

    name: "Keke de piña",

    image: "/productos/kekes/keke-pina.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Marmoleado",

    image: "/productos/kekes/keke-marmoleado.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Vainilla",

    image: "/productos/kekes/keke-vainilla.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Chips de chocolate",

    image: "/productos/kekes/keke-chips.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Zanahoria",

    image: "/productos/kekes/keke-zanahoria.png",

    slicePrice: 3,

    moldPrice: 30,

  },

  {

    name: "Plátano",

    image: "/productos/kekes/keke-platano.png",

    slicePrice: 3,

    moldPrice: 30,

  },

];



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [kekeOpen, setKekeOpen] = useState(false);

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);



  const goTo = (id: string) => {

    document.getElementById(id)?.scrollIntoView({

      behavior: "smooth",

    });



    setMenuOpen(false);

  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProduct(null);
        setKekeOpen(false);
      }
    };
    if (activeProduct || kekeOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProduct, kekeOpen]);



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



        <div className="mx-auto flex h-[120px] max-w-[1250px] items-center justify-between px-5 pt-4 md:px-8">



          {/* LOGO */}



          <button

            onClick={() => goTo("inicio")}

            className="relative z-10 mt-12 flex items-center"

          >

            <img

              src="/logo/dulce-y-cuki.png"

              alt="Dulce y Cuki"

              className="h-[86px] w-auto object-contain md:h-[138px]"

            />

          </button>





          {/* =====================================================

              MENU DESKTOP

          ===================================================== */}



          <nav className="hidden flex-1 items-center justify-center gap-10 md:flex lg:gap-12">



            <button

              onClick={() => goTo("inicio")}

              className="handwriting text-[21px] font-bold text-[#f02f82] transition hover:scale-105"

            >

              Inicio

            </button>



            <button

              onClick={() => goTo("menu")}

              className="handwriting text-[21px] font-bold text-[#26151c] transition hover:text-[#f02f82]"

            >

              Menú

            </button>



            <button

              onClick={() => goTo("pedidos")}

              className="handwriting text-[21px] font-bold text-[#26151c] transition hover:text-[#f02f82]"

            >

              Pedidos

            </button>



            <button

              onClick={() => goTo("sobre-mi")}

              className="handwriting text-[21px] font-bold text-[#26151c] transition hover:text-[#f02f82]"

            >

              Sobre mí

            </button>



            <button

              onClick={() => goTo("pedidos")}

              className="text-[31px] leading-none transition hover:scale-110"

              aria-label="Carrito"

            >

              🛒

            </button>



            <button

              onClick={() => goTo("pedidos")}

              className="handwriting text-[42px] leading-none text-[#431526] transition hover:scale-110"

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

            className="rounded-full bg-[#fbd8e2] px-4 py-2 text-xl md:hidden"

          >

            ☰

          </button>



        </div>





        {/* =====================================================

            MOBILE MENU

        ===================================================== */}



        {menuOpen && (

          <div className="mx-5 mb-4 rounded-[25px] border border-[#f2ccd7] bg-white p-4 shadow-xl md:hidden">



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



        <section

          className="relative h-[760px] overflow-hidden bg-transparent sm:h-[790px] md:h-[610px]"

          style={{

            backgroundImage: "url('/fondos/fondo-tapiz.png')",

            backgroundSize: "100% 730px",

            backgroundPosition: "center -120px",

            backgroundRepeat: "no-repeat",

          }}

        >



          {/* CAPA SUAVE PARA DAR UNIFICACIÓN */}



          <div className="absolute inset-0 bg-[#fffaf6]/15" />





          <div className="relative mx-auto h-full max-w-[1250px] px-5 md:px-8 lg:grid lg:grid-cols-[44%_56%]">



            {/* =====================================================

                COLUMNA IZQUIERDA

            ===================================================== */}



            <div className="relative z-[90] pt-[25px] sm:pt-[30px] lg:pt-[38px]">



              <h1 className="handwriting-title max-w-[570px] text-[53px] font-black leading-[0.88] tracking-[-1px] text-[#421326] sm:text-[61px] md:text-[65px]">



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





              <div className="handwriting mt-0 text-[52px] leading-none text-[#411426]">

                ♡

              </div>





              <p className="handwriting mt-4 max-w-[370px] text-[18px] font-bold leading-[1.1] text-[#351820] md:text-[19px]">

                Kekes, tortas y postres caseros

                <br />

                hechos con mucho amor

                <br />

                (y un toque de locura)

              </p>





              <button

                onClick={() => goTo("menu")}

                className="handwriting mt-5 rounded-full bg-[#f42f82] px-7 py-3.5 text-[17px] font-bold text-white shadow-[0_8px_18px_rgba(242,47,130,0.25)] transition hover:-translate-y-1 hover:bg-[#e62a78]"

              >

                🛒 Haz tu pedido →

              </button>





              <div className="handwriting mt-5 flex items-center gap-2 text-[17px] font-bold text-[#351820]">

                <span className="text-[24px]">

                  📍

                </span>



                Lima, Perú

              </div>





              <div className="absolute -left-3 top-[275px] rotate-[-12deg] text-[28px]">

                ♡

              </div>





              <div className="absolute left-[45%] top-[20px] rotate-[-12deg] text-[25px]">

                ✦

              </div>



            </div>





            {/* =====================================================

                COLUMNA DERECHA

            ===================================================== */}



            <div className="absolute inset-x-0 bottom-0 top-[300px] sm:top-[305px] lg:relative lg:inset-auto lg:h-full">



              {/* FRASE */}



              <div className="handwriting absolute left-[2%] top-[35px] z-[70] rotate-[-5deg] text-[28px] font-bold leading-[0.9] text-[#641a37] md:text-[30px]">

                ♡ Postres

                <br />

                que enamoran ♡

              </div>





              {/* DUEÑA */}



              <img

                src="/hero/duena.png"

                alt="Creadora de Dulce y Cuki"

                className="absolute bottom-[78px] right-[-5%] z-40 h-[390px] w-auto object-contain drop-shadow-[0_12px_16px_rgba(65,20,30,0.12)] sm:bottom-[72px] sm:right-[-3%] sm:h-[435px] lg:right-[-19%] lg:top-[-5px] lg:bottom-auto lg:h-[530px]"

              />





              {/* CHEESECAKE */}



              <img

                src="/hero/cheesecake-hero.png"

                alt="Cheesecake de fresa"

                className="absolute bottom-[12px] left-1/2 z-50 w-[315px] -translate-x-1/2 rotate-[-2deg] object-contain drop-shadow-[0_14px_17px_rgba(70,25,25,0.22)] sm:w-[370px] lg:bottom-[27px] lg:left-[4%] lg:w-[430px] lg:max-w-[76%] lg:translate-x-0"

              />





              {/* CUKI */}



              <img

                src="/hero/cuki.png"

                alt="Cuki"

                className="absolute bottom-[-2px] left-[-7%] z-[70] w-[225px] rotate-[-4deg] object-contain drop-shadow-[0_8px_12px_rgba(40,15,20,0.22)] sm:left-[-4%] sm:w-[270px] lg:bottom-[-5px] lg:left-[-30%] lg:w-[390px]"

              />





              {/* POST-IT */}



              <div className="handwriting absolute right-[2%] top-[8px] z-[80] rotate-[-7deg] bg-[#ffe8ad] px-3 py-2.5 text-[12px] font-bold leading-[1.35] text-[#29151b] shadow-[2px_5px_10px_rgba(50,20,20,0.15)] sm:right-[4%] sm:top-[12px] sm:px-4 sm:py-3 sm:text-[14px] lg:right-[-6%] lg:top-[240px] lg:px-5 lg:py-4 lg:text-[17px] lg:leading-[1.45]">



                ✓ Abogada

                <br />

                ✓ Gym

                <br />

                ✓ Postres

                <br />

                ✓ Yo ♡



              </div>





              {/* DOODLES */}



              <div className="handwriting absolute left-[30%] top-[125px] z-[80] rotate-[10deg] text-[31px]">

                ♡

              </div>



              <div className="handwriting absolute right-[8%] bottom-[72px] z-[80] rotate-[10deg] text-[31px]">

                ♡

              </div>



              <div className="absolute left-[34%] bottom-[145px] z-[80] rotate-[-8deg] text-[25px]">

                ✦

              </div>



              <div className="handwriting absolute right-[22%] top-[180px] z-[80] text-[23px]">

                ♡

              </div>



            </div>



          </div>





          {/* DECORACIONES DE BORDE */}



          <div className="absolute bottom-[8px] left-[6%] rotate-[-10deg] text-[28px]">

            ♡

          </div>



          <div className="absolute bottom-[15px] right-[7%] rotate-[12deg] text-[25px]">

            ✦

          </div>



        </section>





        {/* =========================================================

            MENU

        ========================================================= */}



        <section

          id="menu"

          className="relative bg-[#fffaf7] px-5 pb-24 pt-8 md:px-8"

        >



          {/* DECORACIONES */}



          <div className="absolute left-[8%] top-[25px] rotate-[-15deg] text-3xl text-[#f06c9b]">

            ♡

          </div>



          <div className="absolute right-[10%] top-[35px] rotate-[12deg] text-3xl text-[#f06c9b]">

            ♡

          </div>





          <div className="relative mx-auto max-w-[1180px]">



            {/* TÍTULO */}



            <div className="mb-8 text-center">



              <h2 className="handwriting-title text-[48px] font-black leading-none text-[#5b1830] md:text-[58px]">

                ♡ Nuestro Menú ♡

              </h2>



            </div>





            {/* PRODUCTOS */}



            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">



              {products.map((product) => (



                <article

                  key={product.name}

                  onClick={() => {
                    if (product.isKeke) {
                      setKekeOpen(true);
                    } else {
                      setActiveProduct(product);
                    }
                  }}
                  className="group relative cursor-pointer rounded-[20px] border-2 border-[#f2cbd6] bg-[#fffaf8] p-2.5 transition duration-300 hover:-translate-y-2 hover:shadow-lg"

                >



                  {/* TAG */}



                  {product.tag && (

                    <div className="handwriting absolute left-3 top-3 z-10 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#d52f6d] shadow-sm">

                      {product.tag}

                    </div>

                  )}





                  {/* IMAGEN */}



                  <div className="h-[165px] overflow-hidden rounded-[14px] bg-[#fff0f2]">



                    <img

                      src={product.image}

                      alt={product.name}

                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"

                    />



                  </div>





                  {/* TEXTO */}



                  <div className="px-1 pb-2 pt-3 text-center">



                    <h3 className="handwriting text-[17px] font-bold leading-[1.05] text-[#351720]">

                      {product.name}

                    </h3>



                    {product.price !== undefined && (

                      <div className="handwriting mt-1 text-[20px] font-black text-[#ed3480]">

                        S/{product.price}

                      </div>

                    )}



                    {product.presentation && (

                      <div className="handwriting mt-1 text-[11px] font-bold leading-tight text-[#8a5264]">

                        {product.presentation}

                      </div>

                    )}



                    {product.slicePrice !== undefined && product.isKeke && (

                      <div className="handwriting mt-1 text-[11px] font-bold text-[#8a5264]">

                        Tajada S/{product.slicePrice}

                      </div>

                    )}



                  </div>



                </article>



              ))}



            </div>





            {/* =====================================================

                MODAL KEKE

            ===================================================== */}



            {kekeOpen && (

              <div

                className="fixed inset-0 z-[300] flex items-center justify-center bg-[#35121f]/55 px-4 py-6 backdrop-blur-sm"

                onClick={() => setKekeOpen(false)}

              >

                <div

                  onClick={(e) => e.stopPropagation()}

className="relative max-h-[90vh] w-full max-w-[720px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-[30px] border-4 border-[#f4c7d5] bg-[#fffaf7] p-5 shadow-[0_25px_80px_rgba(55,15,30,0.30)] sm:p-7 md:p-9"
                >

                  <button

                    onClick={() => setKekeOpen(false)}

                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbdce5] text-lg font-bold text-[#681a36] transition hover:scale-110 hover:bg-[#f4bfd0]"

                    aria-label="Cerrar"

                  >

                    ✕

                  </button>



                  <div className="text-center">

                    <div className="mx-auto mb-3 h-[125px] w-[125px] overflow-hidden rounded-full border-4 border-[#f5ced9] bg-[#fff0f3] shadow-md sm:h-[145px] sm:w-[145px]">

                      <img

                        src="/productos/keke-sabores-variados.png"

                        alt="Keke sabores variados"

                        className="h-full w-full object-cover transition duration-500 hover:scale-110"

                      />

                    </div>



                    <div className="handwriting-title text-[38px] font-black leading-none text-[#55172d] sm:text-[48px]">

                      🍰 Keke

                    </div>



                    <p className="handwriting mt-2 text-[18px] font-bold text-[#8a5264] sm:text-[21px]">

                      Elige tu sabor ♡

                    </p>



                    <div className="handwriting mt-3 inline-flex rounded-full bg-[#fde5eb] px-4 py-2 text-[14px] font-bold text-[#6b2039] sm:text-[16px]">

                      Molde S/30 · Tajada S/3

                    </div>

                  </div>



                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {kekeFlavors.map((flavor) => (

                      <div

                        key={flavor.name}

                        className={`group relative rounded-[20px] border-2 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md ${

                          flavor.special

                            ? "border-[#ed6b9b] bg-[#fff0f5] shadow-[0_6px_20px_rgba(237,52,128,0.12)]"

                            : "border-[#f2d5dd] bg-white"

                        }`}

                      >

                        {flavor.special && (

                          <div className="handwriting absolute -right-2 -top-3 rotate-3 rounded-full bg-[#ed3480] px-3 py-1 text-[11px] font-bold text-white shadow-md">

                            ♡ Especial

                          </div>

                        )}



<div className="mb-3 flex h-[135px] w-full items-center justify-center overflow-hidden rounded-[16px] bg-[#fff0f3]">
  <img
    src={flavor.image}
    alt={flavor.name}
    className="h-full w-full object-contain p-1"
  />
</div>



                          <div className="min-w-0 flex-1">

                            <h3 className="handwriting text-[18px] font-black leading-tight text-[#4b1729] sm:text-[20px]">

                              {flavor.name}

                            </h3>



                            <div className="handwriting mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[14px] font-bold text-[#8a5264]">

                              <span>

                                Tajada:

                                <strong className="ml-1 text-[#ed3480]">

                                  S/{flavor.slicePrice}

                                </strong>

                              </span>



                              <span>

                                Molde:

                                <strong className="ml-1 text-[#ed3480]">

                                  S/{flavor.moldPrice}

                                </strong>

                              </span>

                            </div>

                          </div>

                        </div>



                    ))}

                  </div>



                  <div className="handwriting mt-7 text-center text-[16px] font-bold text-[#7b4a5b] sm:text-[18px]">

                    Hecho caserito, con mucho amor ♡

                  </div>

                </div>

              </div>

            )}





            {activeProduct && (
              <div className="fixed inset-0 z-[310] flex items-center justify-center bg-[#35121f]/70 p-4 backdrop-blur-sm sm:p-6" onClick={() => setActiveProduct(null)}>
                <div onClick={(event) => event.stopPropagation()} className="relative flex max-h-[92vh] w-full max-w-[850px] flex-col overflow-hidden rounded-[28px] border-4 border-white bg-[#fffaf8] shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:flex-row">
                  <button type="button" onClick={() => setActiveProduct(null)} className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#fbdce5] text-lg font-bold text-[#681a36] shadow-sm transition hover:scale-110 hover:bg-[#f4bfd0]" aria-label="Cerrar">✕</button>
                  <div className="flex min-h-[300px] items-center justify-center bg-[#fff0f3] p-4 md:w-[55%] md:p-7">
                    <img src={activeProduct.image} alt={activeProduct.name} className="max-h-[58vh] w-full rounded-[22px] object-contain drop-shadow-[0_12px_20px_rgba(70,25,35,0.15)]" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6 text-center sm:p-8 md:p-10 md:text-left">
                    {activeProduct.tag && <div className="handwriting mb-3 inline-flex self-center rounded-full bg-white px-3 py-1 text-[12px] font-bold text-[#d52f6d] shadow-sm md:self-start">{activeProduct.tag}</div>}
                    <h3 className="handwriting-title text-[40px] font-black leading-none text-[#55172d] sm:text-[48px]">{activeProduct.name}</h3>
                    {activeProduct.price !== undefined && <div className="handwriting mt-5 text-[30px] font-black text-[#ed3480]">S/{activeProduct.price} el molde</div>}
                    {activeProduct.slicePrice !== undefined && <div className="handwriting mt-1 text-[18px] font-bold text-[#8a5264]">Tajada S/{activeProduct.slicePrice}</div>}
                    {activeProduct.presentation && <div className="handwriting mt-4 rounded-[18px] bg-[#fde7ed] px-4 py-3 text-[16px] font-bold leading-tight text-[#704153]">{activeProduct.presentation}</div>}
                    <div className="handwriting mt-6 text-[17px] font-bold text-[#7b4a5b]">Hecho caserito, con mucho amor ♡</div>
                  </div>
                </div>
              </div>
            )}


            {/* FRASES INFERIORES */}



            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">



              <div className="handwriting flex items-center gap-2 text-[16px] font-bold text-[#57192f]">

                <span className="text-3xl">

                  🐾

                </span>

                Hechos con amor

              </div>



              <div className="handwriting flex items-center gap-2 text-[16px] font-bold text-[#57192f]">

                <span className="text-3xl">

                  ♡

                </span>

                Ingredientes de calidad

              </div>



              <div className="handwriting flex items-center gap-2 text-[16px] font-bold text-[#57192f]">

                <span className="text-3xl">

                  🍰

                </span>

                Postres caseros

              </div>



              <div className="handwriting text-[21px] font-bold text-[#e72e79]">

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

          className="relative overflow-hidden bg-[#fce2e8] px-5 py-24 md:px-8"

        >



          <div className="mx-auto grid max-w-[1050px] items-center gap-10 md:grid-cols-2">



            <div className="text-center">



              <img

                src="/hero/duena.png"

                alt="Creadora de Dulce y Cuki"

                className="mx-auto h-[430px] object-contain"

              />



            </div>





            <div>



              <span className="handwriting text-3xl font-bold text-[#ed3480]">

                hola, soy yo ♡

              </span>



              <h2 className="handwriting-title mt-3 text-[48px] font-black leading-[0.95] text-[#50172a]">

                La chica detrás de Dulce y Cuki

              </h2>



              <p className="handwriting mt-6 text-[19px] leading-7 text-[#684551]">

                Me encantan los postres, los perros, el gym y crear cosas

                bonitas.

              </p>



              <p className="handwriting mt-4 text-[19px] leading-7 text-[#684551]">

                Así nació Dulce y Cuki: un pequeño proyecto hecho con mucho

                cariño, ganas y obviamente... bastante azúcar. 🍓

              </p>





              <div className="mt-6 flex flex-wrap gap-3">



                <span className="handwriting rounded-full bg-white px-4 py-2 font-bold">

                  ⚖️ Abogada

                </span>



                <span className="handwriting rounded-full bg-white px-4 py-2 font-bold">

                  🏋️ Gym

                </span>



                <span className="handwriting rounded-full bg-white px-4 py-2 font-bold">

                  🍰 Postres

                </span>



                <span className="handwriting rounded-full bg-white px-4 py-2 font-bold">

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

          className="relative overflow-hidden bg-[#57172e] px-5 py-24 text-center text-white"

        >



          <div className="absolute left-[8%] top-[30px] rotate-[-10deg] text-5xl text-[#f58aaa]">

            ♡

          </div>



          <div className="absolute right-[8%] bottom-[30px] rotate-[10deg] text-5xl text-[#f58aaa]">

            ✦

          </div>





          <div className="relative mx-auto max-w-[650px]">



            <div className="text-5xl">

              🍰

            </div>



            <h2 className="handwriting-title mt-4 text-[54px] font-black">

              ¿Se te antojó?

            </h2>



            <p className="handwriting mx-auto mt-5 max-w-lg text-[19px] leading-7 text-[#f8dce3]">

              Escríbeme y coordinamos tu pedido.

              <br />

              Cuki promete no comerse tu postre... probablemente. 🐶

            </p>



            <button className="handwriting mt-8 rounded-full bg-[#f42f82] px-8 py-4 text-[18px] font-bold shadow-lg transition hover:-translate-y-1">

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

          className="h-[76px] w-auto translate-y-[122px] object-contain md:h-[88px]"

        />



        <p className="handwriting mt-3 text-[17px] text-[#805b66]">

          Postres que hacen feliz ♡

        </p>



        <p className="mt-4 text-xs text-[#a47782]">

          Lima, Perú · Desarrollado por LOADING EOE SAC © 2026

        </p>



      </footer>



    </div>

  );

}



export default App;