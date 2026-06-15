/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Test from './screens/Test';
import Result from './screens/Result';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100/50 flex justify-center items-stretch" id="app-root-shell">
      {/* Mobile container centered on screen */}
      <div className="w-full max-w-[430px] bg-white min-h-screen shadow-2xl relative flex flex-col border-x border-neutral-200/50 overflow-x-hidden">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result/:type" element={<Result />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}
