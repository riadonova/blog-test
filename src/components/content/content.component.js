import React from "react"
import './content.component.scss'
import img from '../../images/react.png';
import img2 from '../../images/google.jpg';



export class ContentComponent extends React.Component {
    render () {
        return (
            <main className="main-container">
                <div className="wrapper-shadow">
                <div className="row no-gutters">
                    <div className="col-xl-7 col-lg-6 overflow-hidden pr-0">
                        <img className="img-big" src={img} alt="img"/>
                    </div>
                    <div className="col-xl-5 col-lg-6 bg-white">
                        <div className="big-content">
                        <p className="category-lg text-primary pb-4"><a href="#">React</a></p>
                        <h2 className="font-weight-bold">РЕЦЕПТЫ ДЛЯ REACT</h2>
                        <p className="mb-5">Подключения и настройки для работы с Rect приложением.</p>
                        <div className="pt-5"><a className="btn btn-primary btn-lg" href="#" role="button">Читать</a></div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="wrapper-shadow">
                        <img className="img-small" src={img2} alt="img"/>
                        <div className="small-content bg-white">
                        <p className="category text-primary pb-4"><a href="#">Common</a></p>
                        <h4 className="font-weight-bold">ИКОНКИ GOOGLE</h4>
                        <p>Подключения бесплатных иконок от Google.</p>
                        <div className="pt-5"><a className="btn btn-primary" href="#" role="button">Читать</a></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="wrapper-shadow">
                            <div className="small-content bg-white">
                                <p className="category text-primary pb-4"><a href="#">Common</a></p>
                                <h4 className="font-weight-bold">ИКОНКИ GOOGLE</h4>
                                <p>Подключения бесплатных иконок от Google.</p>
                                <div className="pt-5"><a className="btn btn-primary" href="#" role="button">Читать</a></div>
                            </div>
                            <img className="img-small" src={img2} alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="wrapper-shadow">
                            <img className="img-small" src={img2} alt="img"/>
                            <div className="small-content bg-white">
                                <p className="category text-primary pb-4"><a href="#">Common</a></p>
                                <h4 className="font-weight-bold">ИКОНКИ GOOGLE</h4>
                                <p>Подключения бесплатных иконок от Google.</p>
                                <div className="pt-5"><a className="btn btn-primary" href="#" role="button">Читать</a></div>
                            </div>
                        </div>
                    </div>
                    </div>

                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="wrapper-shadow">
                            <img className="img-small" src={img2} alt="img"/>
                            <div className="small-content bg-white">
                                <p className="category text-primary pb-4"><a href="#">Common</a></p>
                                <h4 className="font-weight-bold">ИКОНКИ GOOGLE</h4>
                                <p>Подключения бесплатных иконок от Google.</p>
                                <div className="pt-5"><a className="btn btn-primary" href="#" role="button">Читать</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="wrapper-shadow">
                            <div className="small-content bg-white">
                                <p className="category text-primary pb-4"><a href="#">Common</a></p>
                                <h4 className="font-weight-bold">ИКОНКИ GOOGLE</h4>
                                <p>Подключения бесплатных иконок от Google.</p>
                                <div className="pt-5"><a className="btn btn-primary" href="#" role="button">Читать</a></div>
                            </div>
                            <img className="img-small" src={img2} alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="wrapper-shadow">
                            <img className="img-small" src={img2} alt="img"/>
                            <div className="small-content bg-white">
                                <p className="category text-primary pb-4"><a href="#">Common</a></p>
                                <h4 className="font-weight-bold">ИКОНКИ GOOGLE</h4>
                                <p>Подключения бесплатных иконок от Google.</p>
                                <div className="pt-5"><a className="btn btn-primary" href="#" role="button">Читать</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

