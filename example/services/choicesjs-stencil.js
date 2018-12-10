function getChoiceData(data, choices) {
  return {
    ...choices.find((choice) => choice.value === data.value),
    ...data
  };
}

function createIcon(icon) {
  const iconClassName = icon ? `yarn-icon yarn-icon--${ icon }` : '';

  return iconClassName
    ? `<span class="${ iconClassName }"></span>`
    : '';
}

function createRemoveButton(visible) {
  return visible
    ? '<button type="button" class="choices__button" data-button=""></button>'
    : '';
}

export const choices = [
  { id: 0, value: 'superstar', label: 'Superstar', selected: false, disabled: false, icon: 'footwear' },
  { id: 1, value: 'adizero', label: 'adizero', selected: false, disabled: false, icon: 'footwear' },
  { id: 2, value: 'stansmith', label: 'Stan Smith', selected: true, disabled: false, icon: 'footwear' },
  { id: 3, value: 'gazelle', label: 'Gazelle', selected: false, disabled: false, icon: 'footwear' },
  { id: 4, value: 'ultraboost', label: 'ultraboost', selected: true, disabled: false, icon: 'footwear' },
  { id: 5, value: 'nmd', label: 'NMD', selected: false, disabled: false, icon: 'footwear' },
  { id: 6, value: 'yeezy', label: 'YEEZY', selected: false, disabled: false, icon: 'footwear' },
  { id: 7, value: 'campus', label: 'Campus', selected: false, disabled: false, icon: 'footwear' },
  { id: 8, value: 'zx500', label: 'ZX 500', selected: false, disabled: true, icon: 'footwear' },
  { id: 9, value: 'samba', label: 'Samba', selected: false, disabled: false, icon: 'footwear' },
  { id: 10, value: 'predator', label: 'Predator', selected: false, disabled: false, icon: 'footwear' },
  { id: 11, value: 'munchen', label: 'Munchen', selected: false, disabled: false, icon: 'footwear' },
  { id: 12, value: 'zxflux', label: 'ZX Flux', selected: false, disabled: false, icon: 'footwear' },
  { id: 13, value: 'eqt', label: 'EQT', selected: false, disabled: false, icon: 'footwear' },
  { id: 14, value: 'solar', label: 'Solar', selected: false, disabled: false, icon: 'footwear' },
  { id: 15, value: 'copa', label: 'Copa', selected: false, disabled: true, icon: 'footwear' },
  { id: 16, value: 'terrex', label: 'Terrex', selected: false, disabled: false, icon: 'footwear' },
  { id: 17, value: 'pureboost', label: 'pureboost', selected: false, disabled: false, icon: 'footwear' },
  { id: 18, value: 'dragon', label: 'Dragon', selected: false, disabled: false, icon: 'footwear' },
  { id: 19, value: 'yung', label: 'YUNG', selected: false, disabled: false, icon: 'footwear' },
  { id: 20, value: 'deerupt', label: 'Deerupt', selected: false, disabled: false, icon: 'footwear' },
  { id: 21, value: 'kamanda', label: 'kamanda', selected: false, disabled: false, icon: 'footwear' }
];

export const events = [
  'addItem', 'removeItem', 'highlightItem', 'unhighlightItem',
  'choice', 'change', 'search', 'showDropdown', 'hideDropdown'
];

export function createChoiceTemplate(template, { itemSelectText }, choices) {
  return (classNames, data) => {
    const _data = getChoiceData(data, choices);
    const icon = createIcon(_data.icon);

    return template(`
      <div class="${ classNames.item } ${ classNames.itemChoice }
            ${ classNames[_data.disabled ? 'itemDisabled' : 'itemSelectable'] }"
          data-select-text="${ itemSelectText }"
          data-id="${ _data.id }"
          data-value="${ _data.value }"
          data-choice
          data-${ _data.disabled ? 'choice-disabled' : 'choice-selectable' }
          role="${ data.groupId > 0 ? 'treeitem' : 'option' }"
          ${ _data.disabled ? 'aria-disabled="true"' : '' }>
        ${ icon }
        <span>${ _data.label }</span>
      </div>
    `);
  };
}

export function createItemTemplate(template, { removeItemButton }, choices) {
  return (classNames, data) => {
    const _data = getChoiceData(data, choices);
    const icon = createIcon(_data.icon);
    const button = createRemoveButton(removeItemButton);

    return template(`
      <div class="${ classNames.item }
            ${ _data.highlighted ? classNames.highlightedState : classNames.itemSelectable }"
          data-item
          data-id="${ _data.id }"
          data-value="${ _data.value }"
          ${ _data.active ? 'aria-selected="true"' : '' }
          ${ _data.disabled ? 'aria-disabled="true"' : '' }>
        ${ icon }
        <span>${ _data.label }</span>
        ${ button }
      </div>
    `);
  };
}

export function getFormValues(form) {
  const _form = new FormData(form);
  const values = [];

  // forEach is not available in all browsers
  if (typeof _form.forEach === 'function') {
    _form.forEach((value, name) => {
      values.push({ name, value });
    });
  } else {
    for (let i = 0, lng = form.length; i < lng; i++) {
      const { name, value } = form[i];

      value && values.push({ name, value });
    }
  }

  return values;
}
