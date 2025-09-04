import React from "react";


class Tobinary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { decimal: "", binary: "" };
    }

    handleChange = (e) => {
        const val = e.target.value;
        this.setState({ decimal: val });

        if (/^-?\d+$/.test(val)) {
            const num = parseInt(val, 10);
            this.setState({ binary: num.toString(2) });
        } else {
            this.setState({ binary: "" });
        }
    };

    render() {
        return (
            <div>
                <h3>Перевод из 10 → 2</h3>
                <input
                    type="text"
                    placeholder="Введите число..."
                    value={this.state.decimal}
                    onChange={this.handleChange}
                />
                <div style={{ marginTop: "10px", fontFamily: "monospace" }}>
                    {this.state.binary
                        ? `Двоичное: ${this.state.binary}`
                        : "Здесь появится двоичное число"}
                </div>
            </div>
        );
    }
}



export default Tobinary;