const DATA_PREFIX = 'gh-interview::';
export function saveItem(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const got = sessionStorage.getItem(key);
  return got ? JSON.parse(got) : [];
}

export function deleteItem(key) {
    sessionStorage.removeItem(key);
}

// export function exportData(): string | null {
//   const data: { [key: string]: any } = {};
//   for (let key in localStorage) {
//     if (key.startsWith(DATA_PREFIX)) {
//       const stored = localStorage.getItem(key);
//       if (stored) {
//         data[key] = JSON.parse(stored);
//       }
//     }
//   }

//   return data ? JSON.stringify(data) : null;
// }

// export function importData(dataStr: string) {
//   const data = JSON.parse(dataStr);
//   for (let [key, value] of Object.entries(data)) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// }
