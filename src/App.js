import "./App.css";

import { IoMdShareAlt } from "react-icons/io";
import { MdMail } from "react-icons/md";
import {
  FaSearch,
  FaLaptop,
  FaBookmark,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import GoogleFontLoader from "react-google-font-loader";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Fira Sans",
            weights: [400, 700],
          },
        ]}
      />
      <div className="App col-md-12 d-flex flex-column">
        <div className="home col-md-12 col-sm-12 flex-md-row flex-sm-column">
          <div className="d-flex flex-md-column left-container col-md-4 col-sm-12">
            <div className="pink-square">
              <div className="blue-sticker">
                <br />
              </div>
              <div className="text-container">
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Racismo <br /> religioso
                </p>
              </div>
            </div>
            <div className="green-square">
              <div className="blue-sticker">
                <br />
              </div>
              <div className="text-container">
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Estudantes <br /> autistas
                </p>
              </div>
            </div>

            <div className="yellow-square">
              <div className="blue-sticker">
                <br />
              </div>
              <div className="text-container">
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Estudantes <br /> com quaisquer defici??ncia
                </p>
              </div>
            </div>
          </div>
          <div className="center-container col-md-4 col-sm-12">
            <div className="center-box">
              <p
                style={{
                  margin: 0,
                  fontSize: 50,
                  color: "#ffffff",
                  fontWeight: 700,
                  fontFamily: "Fira Sans",
                }}
              >
                PLATAFORMA
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 30,
                  color: "#ffffff",
                  fontWeight: 400,
                  fontFamily: "Fira Sans",
                }}
              >
                Educar para transformar
              </p>
            </div>
          </div>
          <div className="d-flex flex-md-column align-items-center flex-sm-row right-container col-md-4 col-sm-12">
            <div className="yellow-square-right">
              <div className="blue-sticker">
                <br />
              </div>
              <div className="text-container">
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Refugiados
                </p>
              </div>
            </div>
            <div className="pink-square-right">
              <div className="blue-sticker">
                <br />
              </div>
              <div className="text-container">
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Povos <br /> ind??genas
                </p>
              </div>
            </div>
            <div className="green-square-right">
              <div className="blue-sticker">
                <br />
              </div>
              <div className="text-container">
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Fobia <br /> LGBTQIA+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="second-page">
          <header className="header">
            <div className="white-box col-md-2">
              <p
                style={{
                  margin: 0,
                  color: "#001c84",
                  fontFamily: "Fira Sans",
                  fontWeight: 700,
                  fontSize: 25,
                }}
              >
                Educar para <br /> transformar
              </p>
            </div>
            <div className="buttons-area">
              <div className="button col-md-2">
                <FaBookmark color="#ffffff" size={20} />
                <div style={{ color: "#fff" }}>PLANOS</div>
              </div>
              <div className="button col-md-2">
                <FaLaptop color="#ffffff" size={20} />
                <div style={{ color: "#fff" }}>CURSOS</div>
              </div>
              <div className="button ">
                <IoMdShareAlt color="#ffffff" size={20} />
                <div style={{ color: "#fff" }}>CADASTRO</div>
              </div>
              <div className="button col-md-2">
                <FaArrowRight color="#ffffff" size={20} />
                <div style={{ color: "#fff" }}>LOGIN</div>
              </div>
            </div>
          </header>
          <div className="content-container">
            <div className="right-content-container col-md-6">
              <p
                style={{
                  margin: 0,
                  color: "#800080",
                  fontFamily: "Fira Sans",
                  fontWeight: 700,
                  fontSize: 30,
                }}
              >
                NOVA PLATAFORMA DE <br /> ENSINO ?? DIST??NCIA!
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#800080",
                  fontFamily: "Fira Sans",
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                POR UMA EDUCA????O LIBERTADORA E ACESS??VEL
              </p>
            </div>

            <div className="left-content-container col-md-6">
              <h5
                style={{
                  margin: 0,
                  color: "#800080",
                  fontFamily: "Fira Sans",
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Educar para transformar
              </h5>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Fira Sans",
                  fontWeight: 400,
                  fontSize: 20,
                }}
              >
                Uma plataforma direcionada aos educadores de escola p??blica do
                pa??s, com o objetivo de auxili??-los a lidar com temas
                relacionados a intoler??ncia dentro e fora da sala de aula.
              </p>
            </div>
          </div>
          <div className="plans-container">
            <div
              className="title-container-plans"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <FaBookmark size={30} />
              <p
                style={{
                  margin: 0,
                  color: "#696969",
                  fontFamily: "Fira Sans",
                  fontWeight: 400,
                  fontSize: 30,
                }}
              >
                Planos
              </p>
            </div>
            <div className="plans">
              <div className="plan">
                <div className="name-plan">
                  <p
                    style={{
                      margin: 0,
                      color: "#696969",
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                    }}
                  >
                    Plano Anual
                  </p>
                  <br />
                  <br />
                </div>
                <div className="price-plan">
                  <p
                    style={{
                      margin: 0,
                      color: "#696969",
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                    }}
                  >
                    R$ 49.90 ?? VISTA OU PARCELADO
                  </p>
                </div>
                <div className="more-info-plan">
                  <p
                    style={{
                      margin: 0,
                      color: "#696969",
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                    }}
                  >
                    + 50 CURSOS INCLUSOS
                  </p>
                  <div
                    style={{
                      width: "50%",
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 5,
                      backgroundColor: "#800080",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#ffffff",
                        fontFamily: "Fira Sans",
                        fontWeight: 400,
                        fontSize: 15,
                      }}
                    >
                      SAIBA MAIS
                    </p>
                  </div>
                </div>
              </div>

              <div className="plan">
                <div className="name-plan">
                  <p
                    style={{
                      margin: 0,
                      color: "#696969",
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                    }}
                  >
                    Plano Gratuito
                  </p>
                  <br />
                  <br />
                </div>
                <div className="price-plan">
                  <p
                    style={{
                      margin: 0,
                      color: "#696969",
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                    }}
                  >
                    R$ 00,00
                  </p>
                </div>
                <div className="more-info-plan">
                  <p
                    style={{
                      margin: 0,
                      color: "#696969",
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                    }}
                  >
                    20 CURSOS INCLUSOS
                    <br /> COM AN??NCIO
                  </p>
                  <div
                    style={{
                      width: "50%",
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 5,
                      backgroundColor: "#800080",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#ffffff",
                        fontFamily: "Fira Sans",
                        fontWeight: 400,
                        fontSize: 15,
                      }}
                    >
                      SAIBA MAIS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="courses-page">
          <header className="header-courses">
            <div className="title-container">
              <FaLaptop size={30} />
              Cursos
            </div>
            <div className="searchbar-container">
              <div
                className="searchbar"
                placeholder="Qual curso est?? procurando ?"
              >
                <input
                  className="input"
                  placeholder="Qual curso est?? procurando ?"
                />
                <div className="button-search">
                  <FaSearch color="#ffffff" size={10} />
                </div>
              </div>
            </div>
          </header>

          <div className="courses-container">
            <div className="course">
              <div
                className="course-header"
                style={{ backgroundColor: "#ffdc5d" }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 20,
                  }}
                >
                  ESTUDANTES <br /> COM DEFICI??NCIA
                </p>
              </div>
              <div className="course-middle">
                <p
                  style={{
                    marginBottom: 10,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 15,
                  }}
                >
                  ESTUDANTES <br /> COM DEFICI??NCIA
                </p>

                <p
                  style={{
                    marginBottom: 15,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  02 HORAS
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "green",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 30,
                  }}
                >
                  ASSINATURA
                </p>

                <p>ACESSO IMEDIATO</p>
              </div>
              <div className="course-bottom">
                <p
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontFamily: "Fira Sans",
                    fontWeight: 300,
                    fontSize: 20,
                  }}
                >
                  SAIBA MAIS
                </p>
              </div>
            </div>

            <div className="course">
              <div
                className="course-header"
                style={{ backgroundColor: "#ffc5cd" }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 20,
                  }}
                >
                  POVOS INDIGENAS
                </p>
              </div>
              <div className="course-middle">
                <p
                  style={{
                    marginBottom: 10,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 15,
                  }}
                >
                  POVOS IND??GENAS
                </p>

                <p
                  style={{
                    marginBottom: 15,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  06 HORAS
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "green",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 30,
                  }}
                >
                  ASSINATURA
                </p>

                <p>ACESSO IMEDIATO</p>
              </div>
              <div className="course-bottom">
                <p
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontFamily: "Fira Sans",
                    fontWeight: 300,
                    fontSize: 20,
                  }}
                >
                  SAIBA MAIS
                </p>
              </div>
            </div>

            <div className="course">
              <div
                className="course-header"
                style={{ backgroundColor: "#97edaa" }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 20,
                  }}
                >
                  FOBIA LGBTQAP+
                </p>
              </div>
              <div className="course-middle">
                <p
                  style={{
                    marginBottom: 10,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 15,
                  }}
                >
                  FOBIA LGBTQAP+
                </p>

                <p
                  style={{
                    marginBottom: 15,
                    color: "#696969",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  03 HORAS
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "green",
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: 30,
                  }}
                >
                  ASSINATURA
                </p>

                <p>ACESSO IMEDIATO</p>
              </div>
              <div className="course-bottom">
                <p
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontFamily: "Fira Sans",
                    fontWeight: 300,
                    fontSize: 20,
                  }}
                >
                  SAIBA MAIS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="final-page">
          <div className="blue-box">
            <p
              className="blue-box-text-title"
              style={{
                color: "#fff",
                fontFamily: "Fira Sans",
                fontWeight: 700,
                fontSize: 30,
              }}
            >
              Quer receber mais informa????es do(s) curso(s)?
            </p>
            <p
              className="blue-box-text-subtitle"
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: "Fira Sans",
                fontWeight: 300,
                fontSize: 20,
              }}
            >
              Digite seu email e acompanhe todas as novidades.
            </p>
            <div className="blue-box-input-box">
              <input
                className="input-blue-box"
                placeholder="Digite seu email"
              />
              <div className="button-submit">
                <p
                  className="button-text"
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontFamily: "Fira Sans",
                    fontWeight: 300,
                    fontSize: 20,
                  }}
                >
                  CADASTRAR
                </p>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="contacts">
              <div className="contacts-title">
                <p className="title">Contatos</p>
                <p className="schedule">Segunda ?? sexta - das 09h00 ??s 18h00</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div className="contact-item" style={{ marginBottom: 10 }}>
                  <MdMail
                    color="#696969"
                    size={30}
                    style={{ marginRight: 10 }}
                  />
                  <p className="contact-item-text">Fale Conosco</p>
                </div>

                <div className="contact-item" style={{ marginBottom: 10 }}>
                  <CgFileDocument
                    color="#696969"
                    size={30}
                    style={{ marginRight: 10 }}
                  />
                  <p className="contact-item-text">Pol??tica de Privacidade</p>
                </div>

                <div className="contact-item" style={{ marginBottom: 10 }}>
                  <FaGraduationCap
                    color="#696969"
                    size={30}
                    style={{ marginRight: 10 }}
                  />
                  <p className="contact-item-text">Consultar Certificado</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <div className="contacts-title">
                <p className="title">Siga-nos</p>
              </div>

              <TiSocialYoutubeCircular color="#696969" size={40} />
              <BsInstagram color="#696969" size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
