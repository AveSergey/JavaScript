let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    },

    run() {
        let board = this.generateBoard();
        document.body.innerHTML = board;
        this.rowsNumbers();
        this.colsChars();
    },


    /**
     * Генерация игрового поля
     * @returns {string} разметка строки
     */
    generateBoard() {
        let board = "";
        let rowStartColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = "";
            if (rowStartColor == 'white') {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'black';
            } else {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'white';
            }
            board += row;
        }
        return `<table>${board}</table>`;
    },

    /**
     * Генерация тега tr - строки
     * td - ячейки
     * @param {string} startColor с какого цвета строка начинается
     * @param {number} rowNum номер строки от 8 до 1
     * @returns {string} тег tr с оформленными тегами td
     */
    generateRow(startWithColor, rowNum) {
        let currentColorClass = startWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Генерация ячеек (тег td) 
     * @param {string} color класс цвета ячейки
     * @param {number} rowNum номер строки 
     * @param {string} colChar буква колонки
     * @returns {string} html-разметка
     */
    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    /**
     * Вставка на доску колонку 
     * с номером строки.
     */
    rowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    /**
     * Строка (tr) с буквой,
     */
    colsChars() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.config.cols.length; i++) {
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },
}

app.run();
