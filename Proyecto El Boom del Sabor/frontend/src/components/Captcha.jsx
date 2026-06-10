import { useEffect, useState } from "react";

function Captcha({ onValidate }) {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {

    generarCaptcha();

  }, []);

  const generarCaptcha = () => {

    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;

    setNum1(a);
    setNum2(b);

    setRespuesta("");

    onValidate(false);

  };

  const verificar = (valor) => {

    setRespuesta(valor);

    if (parseInt(valor) === num1 + num2) {

      onValidate(true);

    } else {

      onValidate(false);

    }

  };

  return (

    <div className="mb-3">

      <label className="form-label">

        CAPTCHA

      </label>

      <div className="d-flex align-items-center gap-2">

        <strong>
          {num1} + {num2} =
        </strong>

        <input
          type="number"
          className="form-control"
          value={respuesta}
          onChange={(e) =>
            verificar(e.target.value)
          }
        />

        <button
          className="btn btn-secondary"
          onClick={generarCaptcha}
        >
          ↻
        </button>

      </div>

    </div>

  );
}

export default Captcha;