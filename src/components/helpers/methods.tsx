// import { useRouter } from "next/router";
import React from "react";


export const isTruthy = (value: any, shouldCheckByType: boolean = true) => {
  const validatedByType = shouldCheckByType
    ? customValidatorByType(value)
    : true;

  if (value !== null && value !== undefined && validatedByType) {
    return true;
  }
  return false;
};

const customValidatorByType = (value: any) => {
  if (value !== undefined && value !== null) {
    const type = typeof value;
    switch (type) {
      case "string":
        return value.trim() !== "";
      case "object":
        if (Array.isArray(value)) {
          return value.length > 0;
        } else {
          return Object.keys(value).length > 0;
        }
      default:
        return true;
    }
  }
};

export const getFormattedNumbers = (value: string) => {
  const matches = value.match(/\d+/g);
  let number = "";
  if (matches !== null) {
    matches.forEach((match) => {
      number = number + match;
    });
  }
  if (number.length === 10) {
    value = number.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return { number: number, maskedNumber: value };
};

export const markdownText = (markdownText: string) => {
  const regex = /(\*\*|__)(.*?)\1|\[(.*?)\]\((.*?)\)/g;
  return markdownText.replaceAll(regex, (match, p1, p2, p3, p4) => {
    if (p1 === "**") {
      return `<strong>${p2}</strong>`;
    }
    if (p1 === "__") {
      return `<em>${p2}</em>`;
    }
    if (p3 && p4) {
      return `<a href="${p4}">${p3}</a>`;
    }
    return match; // Return the original match if no formatting matches
  });
};

export const getUSNumberFormattedText = (value: number) => {
  return new Intl.NumberFormat("en-US").format(value);
};

//** isActive tab for static and dynamic **//

export const isActiveTab = (asPath: any) => {
  // React doesn't have a useRouter hook, so you need to get the current path in a different way.
  const pathNameURL = window.location.pathname;

  if (pathNameURL === asPath || pathNameURL === asPath + "/") {
    return true;
  }
  return false;
};
