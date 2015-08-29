import Trivia from './Trivia';

class TriviaCollection {
    constructor (elements) {
        this.elements = this._set_elements(elements);
    }

    filter (condition) {
        var elements = [];

        for (let element of this.elements) {
            if (! condition(element)) {
                continue;
            }

            elements.push(element);
        }

        return new TriviaCollection(elements);
    }

    visible_on_screen () {
        return this.filter(function (trivia) {
            var scope = trivia.position().top;

            return (scope > 210) && (scope < 260);
        });
    }

    show () {
        for (let element of this.elements) {
            element.show();
        }
    }

    _set_elements (elements) {
        var collection = [];

        for (let element of elements) {
            let instance = element;

            if (element.constructor.name !== 'Trivia')  {
                instance = new Trivia(element);
            }

            collection.push(instance);
        }

        return collection;
    }
}

export default TriviaCollection;