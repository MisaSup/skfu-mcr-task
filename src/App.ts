import Component from './shared/lib/components/types';

interface SurveyProps {
title: string;
userName: string;
age: number;
}

export const Survey: Component<SurveyProps> = ({ title, userName, age, children }) => {
    return `
    <div class="survey-card">
        <h2>${title}</h2>
        <p><strong>Имя:</strong> ${userName}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        ${children ? `<div class="extra" style="margin-top: 10px; color: #ff9f0a;">${children}</div>` : ''}
    </div>
    `;
};